<template>
  <div class="dropzone-box single-upload">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      v-on:vdropzone-success="uploadSuccess"
      @vdropzone-max-files-exceeded="maxfilesexceeded"
      v-on:vdropzone-sending="test"
    >
      <div class="dropzone-custom-content">
        <div class="upload-img dropzone-previews">
          <img
            class="upload-img-preview"
            src="./../assets/images/users/defaultUser.svg"
            alt=""
            v-if="uploaded.length === 0 && !uploading && !url"
          />
          <img
            class="upload-img-preview"
            :src="`${baseUrl}/free/${url}`
"
            alt=""
            v-if="uploaded.length === 0 && !uploading && url"
          />
          <span class="upload-img-btn"
            ><ion-icon name="camera-outline"></ion-icon
          ></span>
        </div>
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  data() {
    return {
      url: null,
      dropzoneOptions: {
        url: this.baseUrl,
        paramName: "file",
        uploadMultiple: false,
        maxFiles: 1,
        previewsContainer: ".upload-img",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          auth: localStorage.getItem("credentials"),
        },
      },
      uploaded: [],
      uploading: false,
    };
  },

  methods: {
    uploadSuccess: function (file, response) {
      this.uploading = false;
      this.uploaded.push(response.fileName);
      this.$emit("success", response.fileName);
    },

    maxfilesexceeded(files) {
      this.$refs.myVueDropzone.removeAllFiles();
      this.$refs.myVueDropzone.addFile(files);
    },

    test() {
      this.uploading = true;
      this.uploaded = [];
      $(".dz-preview:not(:last-child)").remove();
    },
  },

  components: {
    vueDropzone: vue2Dropzone,
  },

  watch: {
    value(value) {
      this.url = value;
    },
  },

  created() {
    this.url = this.value;
  },

  props: {
    value: {
      default: '',
      type: String,
      required: true
    },
    baseUrl: {
      default: '',
      type: String,
      required: true
    }
  }

};
</script>
<style lang="scss" scoped>
.upload-img {
  @apply relative overflow-hidden inline-block;

  .upload-img-preview {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .upload-img-btn {
    @apply bg-primary flex items-center justify-center absolute cursor-pointer bottom-0;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    z-index: 99;
    * {
      cursor: pointer;
    }
    ion-icon {
      @apply text-white text-icon-default cursor-pointer;
    }
  }

  input[type="file"] {
    @apply text-8xl absolute top-0 opacity-0;
  }
}

.single-upload {
  .dropzone .dz-preview {
    @apply m-0;
  }

  .dropzone .dz-preview.dz-image-preview {
    @apply bg-transparent;

    .dz-image {
      border-radius: 9999px !important;
      width: 100px;
      height: 100px;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .dropzone .dz-preview {
    @apply m-0;
  }
}

.localization-rtl {
  .upload-img {
    .upload-img-btn {
      @apply left-0;
    }

    input[type="file"] {
      @apply left-0;
    }
  }
}

.localization-ltr {
  .upload-img {
    .upload-img-btn {
      @apply right-0;
    }

    input[type="file"] {
      @apply right-0;
    }
  }
}
</style>
