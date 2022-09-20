
const can = {
  bind: function (elm, binding, vnode) {
    elm.classList.add('hidden');
  },

  inserted: function (elm, binding, vnode) {
    let show = false;
    if (vnode.context.$store.state.permission.isSet) {
      let itemsProcessed = 0;
      binding.value.forEach(function (item) {
        if (item) {
          show = show || vnode.context.$store.state.permission.permissions.includes(item);
          itemsProcessed++;
          if (itemsProcessed === binding.value.length && !show && vnode.elm.parentElement) {

            vnode.elm.parentElement.removeChild(vnode.elm);

          } else {
            elm.classList.remove('hidden');
          }
        }
      })
    } else {
      vnode.context.$store.watch(state => state.permission.permissions, permission => {


        let itemsProcessed = 0;
        binding.value.forEach(function (item, index) {
          if (item) {
            show = show || permission.includes(item);
            itemsProcessed++;
            if (itemsProcessed === binding.value.length && !show && vnode.elm.parentElement) {

              vnode.elm.parentElement.removeChild(vnode.elm);

            } else {
              elm.classList.remove('hidden');
            }
          }
        })

      })
    }

  }
}

export default can
