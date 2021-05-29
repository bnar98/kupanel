<template>
  <div class="grid grid-cols-1">
    <div class="col-span-1 form-group">
      <label for="dropzone" class="label">{{ $t("uploader.title") }}</label>
      <label for="dropzone" class="sub-label">{{
        $t("uploader.description")
      }}</label>
      <div class="dropzone-box">
        <vue-dropzone
          :key="multi + 'myVueDropzone'"
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
          :useCustomSlot="true"
          v-on:vdropzone-success="uploadSuccess"
          @vdropzone-max-files-exceeded="maxfilesexceeded"
        >
          <div class="dropzone-custom-content">
            <ion-icon class="icon" name="image-outline"></ion-icon>
            <div>
              <span class="title">{{ $t("uploader.guide") }}</span
              ><br />
              <span class="subtitle">{{ $t("uploader.max") }}</span>
            </div>
          </div>
        </vue-dropzone>
      </div>
    </div>
    <div class="col-span-1">
      <div class="thumb" v-for="(img,index) in uploaded" :key="index">
        <img :src="`${$store.state.static.fileBaseUrl}file/free/${img}`" alt="">
        <ion-icon name="close-outline" class="delete-thumb" @click="destroyImage(img)"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  data() {
    return {
      multi: true,
      dropzoneOptions: {
        url: this.baseUrl,
        paramName: "file",
        uploadMultiple: false,
        maxFiles: 100,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          auth: localStorage.getItem("credentials"),
        },
      },
      uploaded: [],
    };
  },

  props: {
    multiple: {
      default: true,
      type: Boolean,
    },
    baseUrl: {
      default: "",
      type: String,
      required: true,
    },
    value: {
      type: Array
    }
  },

  created() {
    this.uploaded = this.value;
    this.setMaxFiles(this.multiple);
  },

  methods: {
    uploadSuccess: function (file, response) {
      this.uploading = false;
      this.uploaded.push(response.fileName);
      this.$emit("input", uploaded);
    },

    maxfilesexceeded(files) {
      if (!this.multiple) {
        this.$refs.myVueDropzone.removeAllFiles();
        this.$refs.myVueDropzone.addFile(files);
      }
    },

    setMaxFiles(value) {
      this.multi = value;
      this.dropzoneOptions.maxFiles = !value ? 1 : 100;
    },
    destroyImage(image) {
      this.uploaded.splice( this.uploaded.indexOf(image) , 1);
      this.$emit('input', this.uploaded);
    }

  },

  watch: {
    multiple(value) {
      this.setMaxFiles(value);
    },
    value(newValue) {
      this.uploaded = newValue;
    }
  },

  components: {
    vueDropzone: vue2Dropzone,
  },
};
</script>
<style lang="scss" scoped>
.dropzone-box {
  @apply bg-input-background-color p-4 rounded-lg;

  .vue-dropzone {
    @apply border-2 border-dashed border-gray-500 bg-input-background-color;
    min-height: 85px;

    .dz-message {
      @apply m-0;
    }

    .dropzone-custom-content {
      @apply flex flex-row justify-center items-center font-dana;

      .title {
        @apply text-input-label text-blue-dark;
      }

      .subtitle {
        @apply text-input-sub-label text-input-sub-label-color;
      }

      .icon {
        @apply text-icon-large text-gray-600;
      }
    }
  }
}

.localization-rtl {
  .dropzone-box {
    .vue-dropzone {
      .dropzone-custom-content {
        .icon {
          //   @apply ml-6;
        }
      }
    }
  }
}

.localization-ltr {
  .dropzone-box {
    .vue-dropzone {
      .dropzone-custom-content {
        .icon {
          //   @apply mr-6;
        }
      }
    }
  }
}

.thumb {
  @apply relative;
  width: 58px;
  height: 58px;

  >img {
    @apply w-full h-full rounded-lg;
  }

  &:hover .delete-thumb {
    @apply opacity-100;
  }

  >.delete-thumb {
    @apply cursor-pointer bg-white absolute opacity-0 transition-opacity duration-150 ease-in-out;
    right: 18px;
    top: 19px;
  }
}
</style>
