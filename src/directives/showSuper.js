
const showSuper = {
  inserted: function (elm, binding, vnode) {

    binding.value.forEach(function (item) {
      if (!vnode.context.$store.state.auth.adminInfo.isSuperAdmin) {
        elm.classList.add('hidden')
      }
    })

  }
}

export default showSuper
