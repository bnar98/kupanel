module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dana': ['var(--font-family)']
    },
    extend: {
      height: {
        'sidebar': 'calc(100vh - 64px)',
      },
      minHeight: {
        'tab': '445px'
      },
      fontSize: {
        'icon-default':'1.5rem',
        'icon-large':'1.8rem',
        'icon-small':'0.9rem',
        'input-default':'0.8rem',
        'hypertext-default':'1rem',
        'p-default':'1rem',
        'span-default':'1rem',
        'input-label':'0.93rem',
        'input-sub-label':'0.75rem',
      },
      colors:{
        'primary': 'var(--primary-color)',
        'primary-dark': 'var(--primary-dark-color)',
        'secondary': 'var(--secondary-color)',
        'secondary-dark': 'var(--secondary-color)',
        'green-light': 'var(--green-color)',
        'green-dark': 'var(--green-dark-color)',
        'red-light': 'var(--red-color)',
        'red-dark': 'var(--red-dark-color)',
        'yellow-light': 'var(--yellow-color)',
        'yellow-dark': 'var(--yellow-dark-color)',
        'pruple-light': 'var(--pruple-color)',
        'pruple-dark': 'var(--pruple-dark-color)',
        'blue-light': 'var(--blue-color)',
        'blue-dark': 'var(--blue-dark-color)',
        'black': 'var(--black-color)',
        'white': 'var(--white-color)',
        gray: {
          "100": "var(--gray-100-color)",
          "200": "var(--gray-200-color)",
          "300": "var(--gray-300-color)",
          "400": "var(--gray-400-color)",
          "500": "var(--gray-500-color)",
          "600": "var(--gray-600-color)",
          "700": "var(--gray-700-color)",
          "800": "var(--gray-800-color)",
          "900": "var(--gray-900-color)"
        },

        // backgrounds
        'background-color': 'var(--background-color)',
        'foreground-color': 'var(--foreground-color)',
        'header-background-color': 'var(--header-background-color)',
        'overlay-background-color': 'var(--overlay-background-color)',

        // buttons
        'btn-default-background-color': 'var(--btn-default-background-color)',
        'btn-default-background-hover-color': 'var(--btn-default-background-hover-color)',
        'btn-default-forground-color': 'var(--btn-default-forground-color)',

        // side menu
        'sidemenu-background-color': 'var(--sidemenu-background-color)',
        'sidemenu-expend-background-color': 'var(--sidemenu-expend-background-color)',
        'sidemenu-hover-background-color': 'var(--sidemenu-hover-background-color)',
        'sidemenu-active-border-color': 'var(--sidemenu-active-border-color)',
        'sidemenu-expend-seperator-color': 'var(--sidemenu-expend-seperator-color)',
        'sidemenu-expend-right-border-color': 'var(--sidemenu-expend-right-border-color)',
        'sidemenu-icon-color': 'var(--sidemenu-icon-color)',
        'sidemenu--active-icon-color': 'var(--sidemenu--active-icon-color)',

        // inputs
        'input-placeholder-color': 'var(--input-placeholder-color)',
        'input-border-color': 'var(--input-border-color)',
        'input-focus-border-color': 'var(--input-focus-border-color)',
        'input-label-color': 'var(--input-label-color)',
        'input-sub-label-color': 'var(--input-sub-label-color)',
        'input-text-color': 'var(--input-text-color)',
        'input-background-color': 'var(--input-background-color)',
        'input-hover-background-color': 'var(--input-hover-background-color)',

        // seperators
        'hr-color': 'var(--hr-color)',
        'vertical-seperator-color': 'var(--vertical-seperator-color)',
        'horizontal-seperator-color': 'var(--horizontal-seperator-color)',

        // borders
        'default-border-color': 'var(--default-border-color)',
        'border-color': 'var(--border-color)',

        // icons
        'icon-color': 'var(--icon-color)',
        'icon-active-color': 'var(--icon-active-color)',

        // texts
        'title-color': 'var(--title-color)',
        'sub-title-color': 'var(--sub-title-color)',
        'description-color': 'var(--description-color)',

        // boxes
        'box-background-color': 'var(--box-background-color)',
        'box-shadow-color': 'var(--box-shadow-color)',
        'box-border-color': 'var(--box-border-color)',

        // data-holder
        'table-header-background-color': 'var(--table-header-background-color)',
        'table-header-forground-color': 'var(--table-header-forground-color)',
        'table-row-background-color': 'var(--table-row-background-color)',
        'table-row-hover-background-color': 'var(--table-row-hover-background-color)',
        'table-row-forground-color': 'var(--table-row-forground-color)',
        'table-footer-background-color': 'var(--table-footer-background-color)',
        'table-odd-background-color': 'var(--table-odd-background-color)',
        'table-even-background-color': 'var(--table-even-background-color)',

        // scrollbar
        'scrollbar-track-color': 'var(--scrollbar-track-color)',
        'scrollbar-thumb-color': 'var(--scrollbar-thumb-color)',

        // select-box
        'selectbox-background-color': 'var(--selectbox-background-color)',

        // dropdown
        'dropdown-background-color': 'var(--dropdown-background-color)',
        'dropdown-border-color': 'var(--dropdown-border-color)',
        'dropdown-triangle-color': 'var(--dropdown-triangle-color)',

        // datepicker
        'datepicker-background-color': 'var(--datepicker-background-color)',

        // shimmer
        'shimmer-bg-color': 'var(--shimmer-bg-color)',

        // loader components
        'shimmer-color-1': 'var(--shimmer-color-1)',
        'shimmer-color-2': 'var(--shimmer-color-2)',

      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd','even']
    },
  },
  plugins: [],
}
