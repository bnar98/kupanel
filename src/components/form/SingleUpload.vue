<template>
  <div :class="['dropzone-box', {'single-upload':type !== 'file', 'file-upload': type === 'file'}]">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      v-on:vdropzone-success="uploadSuccess"
      @vdropzone-max-files-exceeded="maxfilesexceeded"
      v-on:vdropzone-sending="sending"
      @vdropzone-file-added= "error"
    >
      <div class="dropzone-custom-content" v-if="type === 'img'">
        <div class="upload-img dropzone-previews">
          <img
            class="upload-img-preview"
            src="../../assets/images/users/defaultUser.svg"
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
      <div class="dropzone-custom-content" v-else>
        <div class="upload-img dropzone-previews">
          <Input
            name="file"
            :placeholder="'choos a file'"
            v-model="fileName"
            icon="attach-outline"
            separator
          />
        </div>
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Input from "./Input";

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
      fileName: this.placeholder,
      disabled: false
    };
  },

  methods: {
    uploadSuccess: function (file, response) {
      this.fileName = file.name;
      this.uploading = false;
      this.uploaded.push(response.fileName);
      this.$emit("input", response.fileName);
    },

    maxfilesexceeded(files) {
      this.$refs.myVueDropzone.removeAllFiles();
      this.$refs.myVueDropzone.addFile(files);
    },

    sending(file) {
      if (this.type === 'file') {
        document.getElementsByClassName('dz-file-preview')[0].style.display = "none";
        this.fileName = this.uploadingText;
      }

      this.uploading = true;
      this.uploaded = [];
      $(".dz-preview:not(:last-child)").remove();
    },
    error(){
      if (this.type === 'file') {
        document.getElementsByClassName('dz-file-preview')[0].style.display = "none";
      }
    }
  },

  components: {
    vueDropzone: vue2Dropzone,
    Input
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
    },
    type: {
      type:String,
      default:'img'
    },
    placeholder: {
      type:String,
      default:''
    },
    uploadingText: {
      type:String,
      default:''
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
    @apply bg-primary flex items-center justify-center absolute cursor-pointer bottom-0 z-20;
    border-radius: 50px;
    width: 40px;
    height: 40px;
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

  .dz-image {
    @apply rounded-full;
    width: 100px;
    height: 100px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .dropzone .dz-preview.dz-image-preview {
    @apply bg-transparent;

  }

  .dropzone .dz-preview {
    @apply m-0;
  }
}


.file-upload{
  .vue-dropzone{
    min-height: unset;
    padding: 0;
    border: none;
    &:hover{
     background-color: white;
    }
    .upload-img{
      @apply w-full;
    }

  }

  .dz-preview{
    display: none !important;
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
