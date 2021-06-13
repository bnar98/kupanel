import Vue from 'vue';
// import $store from "@/state/$store";

 const can = {

  inserted: function (elm, binding, vnode) {

    let show = false;


    if (($store.state.permission.isSet && !$store.state.auth.account.is_superAdmin)){
      let itemsProcessed = 0;
      binding.value.forEach(function (item) {
        show = show || $store.state.permission.permissions.includes(item);
        itemsProcessed++;
        if (itemsProcessed === binding.value.length && !show ) {

          vnode.elm.parentElement.removeChild(vnode.elm);

        }
      })
    } else {
      $store.watch(state => state.permission.permissions, permission => {
        if ((!$store.state.auth.account.is_superAdmin)){
          let itemsProcessed = 0;
          binding.value.forEach(function (item, index) {
            show = show || permission.includes(item);
            itemsProcessed++;
            if (itemsProcessed === binding.value.length && !show ) {

              vnode.elm.parentElement.removeChild(vnode.elm);

            }
          })
        }
      })
    }

  }
}
export default can;
// Vue.directive('can', can)
