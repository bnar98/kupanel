<template>
  <div class="flex flex-row">
    <div class="w-full form-group">
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
  },

  created() {
    this.setMaxFiles(this.multiple);
  },

  methods: {
    uploadSuccess: function (file, response) {
      this.uploading = false;
      this.uploaded.push(response.fileName);
      this.$emit("success", response.fileName);
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
  },

  watch: {
    multiple(value) {
      this.setMaxFiles(value);
    },
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
</style>
