import Swal from 'sweetalert2';

/**
 * @see https://stackoverflow.com/a/1714899
 *
 * @param  obj
 * @param  prefix
 * @returns {string}
 */
export function http_build_query(obj, prefix = null) {
  const str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        http_build_query(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}

/**
 * @see https://stackoverflow.com/a/42483509
 *
 * @param formData
 * @param data
 * @param parentKey
 */
function buildFormData(formData, data, parentKey) {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

/**
 * @see https://stackoverflow.com/a/42483509
 *
 * @param    data
 * @return {FormData}
 */
export function jsonToFormData(data) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}

/**
 * @see https://gist.github.com/rickycheers/4541395 *
 *
 * @param  string
 * @return string
 */
export function ucwords(string) {
  string = string.toLowerCase();
  return string.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
    function (s) {
      return s.toUpperCase();
    });
}

/**
 * @see https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
 * 
 * Native API
 * 
 * @param number
 * @return string
 * 
 */
export function formatCurrency(number = 0) {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'PHP',
  });
  return `₱${formatter.format(number)}`;
}

export function currencySuffix(number = 0) {
  let value;
  let suffix = '';

  if (number > 999 && number < 1000000) {
    value = Math.ceil((number / 1000)); // convert to K for number from > 1000 < 1 million 
    suffix = 'K';
  } else if (number > 1000000) {
    value = Math.ceil((number / 1000000)); // convert to M for number from > 1 million 
    suffix = 'M';
  } else if (number < 900) {
    value = number; // if value < 1000, nothing to do
  }
  else {
    value = 0;
  }
  
  return formatMoney(value) + suffix;
}


/**
 * @see https://sweetalert2.github.io/
 *
 * Swal Loading popup
 * 
 */
export function showLoading() {
  try {
    JsLoadingOverlay.show({
      "overlayBackgroundColor": "#666666",
      "overlayOpacity": 0.6,
      "spinnerIcon": "ball-clip-rotate",
      "spinnerColor": "#4B4747",
      "spinnerSize": "1x",
      "overlayIDName": "overlay",
      "spinnerIDName": "spinner",
      "offsetX": 0,
      "offsetY": 0,
      "containerID": null,
      "lockScroll": false,
      "overlayZIndex": 9998,
      "spinnerZIndex": 9999
    });
  } catch (error) {

  }

}

export function dismissLoading() {
  try {
    JsLoadingOverlay.hide();
  } catch (error) {
  }
}

export function showSwal({ title = null, html = null, icon = 'success', id = new Date().getTime(), confirmButtonText = 'Ok', denyButtonText = 'Ignore', showCancelButton = false, confirmButtonColor = '#3b82f6', allowOutsideClick = true }) {

  return Swal.fire({
    // icon,
    title,
    html,
    showCancelButton,
    confirmButtonText,
    denyButtonText,
    confirmButtonColor,
    allowOutsideClick
  })

}

export function showToast({ title = null, icon = 'success', id = new Date().getTime() }) {

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-left',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: false,
    showClass: {
      popup: `swal-id-${id}`
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  Toast.fire({
    icon,
    title
  });

}

export function setStorage(key, value) {
  if (!value) {
    return true;
  }
  const lKey = base64.encode(key);
  const lValue = base64.encode(value);
  return localStorage.setItem(lKey, lValue);
}

export function getStorage(key) {
  const lKey = base64.encode(key);
  const lValue = localStorage.getItem(lKey);
  if (!lValue) {
    return '';
  }
  return base64.decode(lValue);
}

export function removeStorage(key) {
  const lKey = base64.encode(key);
  return localStorage.removeItem(lKey);
}

export default showToast;