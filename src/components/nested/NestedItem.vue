<template>
  <li class="item" v-if="itemValues" @click="getChild(itemValues)">
    <div class="item-name">
      <ion-icon
        class="icon"
        :name="itemValues.icon"
        v-if="itemValues.parent_id === null && componentType === 'category'"
      ></ion-icon>
      <span>{{ itemValues.label }}</span>
    </div>
    <ion-icon
      name="chevron-back-outline"
      v-if="itemValues.has_child"
    ></ion-icon>
    <check-box
      :name="itemValues.label"
      v-if="!itemValues.has_child && multi"
      v-model="isChecked"
    ></check-box>
  </li>
</template>

<script>
export default {
  data() {
    return {
      itemValues: null,
      isChecked: false,
      componentType: "",
    };
  },

  props: ["item", "value", "type", "multi"],

  created() {
    this.itemValues = this.item;
    this.isChecked = this.value;
    this.componentType = this.type;
  },

  watch: {
    item(newValue) {
      this.itemValues = newValue;
    },
    value(newValue) {
      this.isChecked = newValue;
    },
    type(newValue) {
      this.componentType = newValue;
    },
  },

  methods: {
    getChild(value) {
      this.$emit("getChild", value);
      if (!value.has_child) {
        if (this.multi) {
          this.isChecked = !this.isChecked;
        } else {
          this.isChecked = true;
        }

        this.$emit("select", this.itemValues.id, this.isChecked);
      }
    },
  },
};
</script>