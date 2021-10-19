<template>
  <div class="media-manager">
    <ku-Label>{{title}}</ku-Label>
    <div class="small" >
      <div class="content-area" @click="show">
        <img class="absolute w-35 h-35  p-4 m-auto cursor-pointer" :src="image" alt="">
        <ion-icon class="absolute" name="camera-outline"></ion-icon>
        <label class="absolute w-full h-full">
          <input v-if="!gallery" class="absolute w-full h-full" type="file" @change="onInputChange" :multiple="multiple" hidden>
        </label>
      </div>
    </div>
    <transition v-if="gallery" name="modal">
      <div class="modal-mask" v-show="showModal" @click.stop>
        <div class="modal-container col-xs-12" @click.stop>
          <div class="modal-header row">
            <span class="title">{{ title }}</span>
            <span class="ion-close-circled" @click="close">
              <ion-icon name="close-outline"></ion-icon>
            </span>
          </div>
          <div v-if="showTabs" class="uploader-container pb-10">
            <div class="p-14 flex flex-col items-end">
              <div>
                <ku-Button  class="" :title="$t('media-manager.select-from-gallery')" ui="btn btn-default medium" type="button" @click.native="showUploadFile"></ku-Button>
              </div>
              <div class="uploader w-full mt-4 flex justify-center items-center p-12 border border-dashed border-gray-500 bg-input-background-color" @dragenter="onDragEnter" @dragleave="onDragLeave" @dragover.prevent @drop="onDrop" :class="{'dragging': isDragging}">
                <ion-icon class="text-gray-500 text-4xl" name="image-outline"></ion-icon>
                <div class="grid place-items-center px-4">
                    <p class="text-blue-dark text-base">{{ $t('media-manager.drag-and-drop-title') }}</p>
                    <label class="cursor-pointer text-base text-gray-500"> 
                      
                      {{ $t('media-manager.select-image-title1') }}
                      <b>{{$t('media-manager.select-image-title2') }}</b>
                      {{ $t('media-manager.select-image-title3') }}

                      <input type="file" @change="onInputChange" :multiple="multiple" hidden>
                    </label>
                </div>
              </div>
            </div>
            <div class="show-images" v-show="images.length && gallery">
              <p class="text-blue-dark text-base text-center">{{ $t('media-manager.selected-image-title') }}</p>
              <div class="image-preview flex">
                <div class="img-wrapper" v-for="(image, index) in images" :key="index">
                  <img class="" :src="image" alt="">
                </div>
              </div>
              <div class="flex justify-center">
                <ku-Button @click.native="onClickUploadButton" :isLoading="isLoading" icon="document-outline" :title="$t('media-manager.upload-file-title')" ui="btn btn-primary medium" type="button"></ku-Button>
              </div>
            </div>
          </div>
          <div v-else class="Selector-container flex justify-center justify-items-center h-full border-t border-solid border-input-border-color">
            <div class="Selector flex w-full">
              <div class="right-section h-full w-1/5 border-l-2 border-solid border-default-border-color">
                <div class="flex flex-col items-center">
                  <span class="text-center p-5">{{ $t('media-manager.file-selected-details') }}</span>
                  <img class="w-40 p-5" v-if="lastImageSelected" :src="lastImageSelected.src" alt="alt">
                  <img class="w-40 p-5"  v-else src="/images/users/defaultUser.svg" alt="alt">
                  <ku-Button class="mt-5" icon="checkmark-outline" @click.native="onClickSaveButton" :title="$t('media-manager.accept-btn')" ui="btn-secondary bordered medium" type="button"></ku-Button>
                </div>
              </div>
              <div class="left-section">
                <div>
                  <div class="grid grid-cols-12">
                    <label class="mx-14 my-4" for="filters">{{ $t('media-manager.filters') }}</label>
                  </div>
                  <div class="grid grid-cols-3 gap-4 mx-14">
                    <div class="col-span-3 md:col-span-1">
                        <ku-Select :gap="false" name="filter" v-model="filter" :options="filters" :placeholder="$t('specification.create.unit-placeholder')" property="title" translate-prefix="selectBox."></ku-Select>
                    </div>
                    <div class="col-span-3 md:col-span-1">
                        <ku-Select :gap="false" name="time" v-model="time" :options="time_order"  :placeholder="$t('specification.create.unit-placeholder')" property="title" translate-prefix="selectBox."></ku-Select>
                    </div>
                    <div class="grid content-end justify-end col-span-3 md:col-span-1">
                        <ku-Button :title="$t('media-manager.add-file')" ui="btn btn-primary medium" type="button" @click.native="showUploadFile"></ku-Button>
                    </div>
                  </div>
                </div>
                <div class="image-preview pt-2 flex">
                  <VueSelectImage :dataImages="photos" :is-multiple="multiple" w="107px" h="107px" @onselectmultipleimage="selectedMultipleImage" @onselectimage="selectImage"></VueSelectImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {

  layout: 'panel',
    
  data() {
    return {
      showModal: false,
      showTabs: false,
      isLoading: false,
      filters: [],
      filter: "",
      time_order: [],
      time: "desc",
      image: "/images/users/defaultUser.svg",
      isDragging: false,
      dragCount: 0,
      files: [],
      images: [],
      initialSelected: [],
      photos: [],
      selectedImage: [],
      lastImageSelected: "",
      addFilesEndpoint: '/file/image',
      formData: new FormData(),
      form: new Form({
        files: []
      }),
      api: process.env.vueAppFileFilters,
      filtersListEndpoint: process.env.vueAppFiltersList,
      FileStore: process.env.vueAppFileStore,
    }
  },

  props: {
    title: {
      type: String
    },

    gallery: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    value: {}
  },

  // created(){
  //   this.loadGallery();
  // },

  methods: {

    getFiltersKey(){
      if (this.filtersListEndpoint) {
        this.$axios.get(`${this.filtersListEndpoint}`).then((Response) => {
          this.filters = structureselectstring(Response.data.data.filters.keys)
          this.time_order = structureselectstring(Response.data.data.filters.time_order)
        })
      }
    },

    pressEscButton(){
      document.addEventListener("keydown", (e) => {
        if (this.show && e.keyCode == 27) {
          this.close()
        }
      });

    },

    show(){
      this.showModal = ! this.showModal;
      if (this.showModal && this.gallery) {
        this.loadGallery();
      }
    },

    showUploadFile(){
      this.showTabs = !this.showTabs;
    },

    async loadGallery(filter = 'all'){
      this.isLoading = false;
      this.photos = [];
      await this.$axios.post(`${this.api}`, {key: filter,time_order: this.time}).then(Response => {
        for (let i = 0; i < Response.data.data.files.length; i++) {
          this.photos.push({
            id: Response.data.data.files[i].id,
            src: process.env.vueAppGetFileUrl + Response.data.data.files[i].path,
            hash: Response.data.data.files[i].path
          })
        }
      });
    },

    selectPhoto(url) {
      this.selected = url;
    },

    close() {
      this.showModal = false,
      this.files = [];
      this.images = [];
      this.selectedImage = [];
      this.lastImageSelected = '';
      this.showTabs = false;
    },

    onDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
    },

    onDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) {
        this.isDragging = false;
      }
    },

    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      const files = e.dataTransfer.files;
      Array.from(files).forEach(file => this.addImage(file));
    },

    addImage(file) {
      if (!file.type.match('image.*')) {
        return;
      }
      this.formData.append('file', file)
      this.$uploadApi.post(`${this.addFilesEndpoint}`, this.formData).then((Response) => {
        this.$emit("input", Response.data.fileName);
        this.formData = new FormData();
      }).catch((error) => {
        console.log(error);
      })

      if (!this.gallery) {
        this.files = [];
        this.images = [];
        this.files.push(file);
        const img = new Image(),
        reader = new FileReader();
        reader.onload = (e) => this.image = e.target.result;
        reader.readAsDataURL(file);
        this.close();
      } else {
        this.files.push(file);
        const img = new Image(),
        reader = new FileReader();
        reader.onload = (e) => this.images.push(e.target.result);
        reader.readAsDataURL(file);
      }
    },

    onInputChange(e) {
      const files = e.target.files;
      Array.from(files).forEach(file => this.addImage(file));
    },

    selectImage(data) {
      this.lastImageSelected = data
      this.selectedImage = data
    },

    selectedMultipleImage(data) {
      this.selectedImage = data
      this.lastImageSelected = this.selectedImage[this.selectedImage.length - 1]
    },

    onClickSaveButton() {
      if (this.selectedImage.length >= 2) {
        this.image = "/images/icon/multiSelect.svg";
        
      }else{
        this.image = this.selectedImage.src;
      }
      
      this.$emit("input", this.selectedImage.id)
      this.close()
    },

    async onClickUploadButton() {
      this.isLoading = true;
      for (let i = 0; i < this.files.length; i++) {
        this.formData.append('file', this.files[i])
        // this.formData.append('height', 100)
        // this.formData.append('width', 100)
        await this.$uploadApi.post(`${this.addFilesEndpoint}`, this.formData).then((Response) => {
          this.form.files.push(Response.data.fileName)
          this.showTabs = false;
          this.isLoading = false;
          this.formData = new FormData();
        }).catch((error) => {
          console.log(error);
          this.isLoading = false;
        })
      }
      this.$axios.post(`${this.FileStore}`, this.form).then((Response) => {
        this.images = [];
        this.loadGallery();
        this.form.reset();
      });

    },
  },


  mounted() {
    this.pressEscButton();
    this.getFiltersKey();
  },

  watch: {
    filter(key) {
      this.loadGallery(key);
    },
    time(key) {
      this.loadGallery(key);
    },
  },

}

</script>

<style lang="scss">
.media-manager {
  .label{
    font-size: 16px;
  }
  .small {
    @apply w-40 h-44 p-4 bg-input-background-color;
    .content-area {
      @apply w-full h-full cursor-pointer border border-dashed border-gray-500 relative flex justify-center items-center;
      ion-icon {
        @apply absolute bottom-5 left-3 text-2xl p-2 text-white bg-primary rounded-full;
      }
    }
  }
}
.modal-mask {
  .modal-container {
    width: 85%;
    .modal-header {
      background-color: #4a5459 !important;
    }
    .uploader-container {
      height: 539px;
      overflow: auto;

      .uploader {
        &.dragging {
          @apply border border-dashed border-red-500;
        }
      }
      .show-images {
        .image-preview {
          @apply justify-center items-center border border-solid border-input-border-color max-h-64 mb-10 m-auto overflow-y-scroll overflow-x-hidden flex-wrap;
          width: 94%;
          .img-wrapper{
							margin: 10px;
							img{
								max-width: 100px;
							}
						}
        }
      }
    }

    .Selector-container {

      .Selector {
        .left-section {
          @apply w-4/5 bg-white;
          height: 450px;
          .image-preview {
            @apply w-11/12 h-80 border border-solid border-red-500 my-5 mx-auto overflow-auto;
          }
        }
      }
    }
  }
}
</style>
