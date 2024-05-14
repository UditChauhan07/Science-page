let url = "https://be-cms.brunomd.com/dev/brunomd/";
let rechargeKey = "h2HZR£qu3";
let cartKey = "l8Z2364#TEa";

export async function updateCustomerAddress({ address, customerAccessToken }) {
  address.customerAccessToken = customerAccessToken;
  let response = await fetch(url + "fPlNQ2FQ7shCYsJ", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}
//1234
export async function getSubscriptionDetails({ EXTERNALID }) {
  let response = await fetch(url + "2vFjH93gPTu", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      id: EXTERNALID,
      type: 1,
    },
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200) {
    let cdata = data.data;
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function getProductSearch() {
  let response = await fetch(url + "RiYZPmJpVRJSrzC", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: "RiYZPmJpVRJSrzC" }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function createCustomerAddress({ address, customerAccessToken }) {
  address.customerAccessToken = customerAccessToken;
  let response = await fetch(url + "uwov66o52c6xhUZ", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function ResetUser({ email }) {
  let response = await fetch(url + "0s1R0z7iWBO6ZH9", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function deleteCustomerAddress({
  addressId,
  customerAccessToken,
}) {
  let address = {};
  address.customerAccessToken = customerAccessToken;
  address.addressId = addressId;
  let response = await fetch(url + "qJqJfRyqeAl5aRy", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function orderInit({ orderId }) {
  let response = await fetch(url + "vpuYpeJiy66Epic", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: orderId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function getProduct({ productId }) {
  let response = await fetch(url + "9YUdsO93dUqQG1q", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function EditOrder({ id, lineItemId, quantity }) {
  let response = await fetch(url + "PWmbXbMzk5asQEa", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, lineItemId, quantity }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function CompleteEditOrder({ id, note }) {
  let response = await fetch(url + "tmucxFqz2wYthSV", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, note }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function createUserShop({ user }) {
  let response = await fetch(url + "giZRJS06RgkvQBa", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function AddtoCart({
  lineItems,
  customerAccessToken = null,
  discountCodeList = [],
}) {
  let response = await fetch(url + "YrQHcJLqBycoIFI", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lineItems, customerAccessToken, discountCodeList }),
  });

  let data = JSON.parse(await response.text());
  console.log({ data });
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function updateCartAccount({
  cartId,
  customerAccessToken = null,
  deliveryAddress = null,
  countryCode = null,
}) {
  let response = await fetch(url + "gJD3MUogcruTY5T", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartId,
      customerAccessToken,
      deliveryAddress,
      countryCode,
    }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function getCheckout({ cartId }) {
  let response = await fetch(url + "ce1C2xeUvc7RArg", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartId }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function addCartItems({ items, customerAccessToken = null }) {
  let cartId = localStorage.getItem(cartKey);
  let response = await fetch(url + "PQEGGauONdO1rN8", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: { cartId, items, customerAccessToken } }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export async function getCartList() {
  let cartId = localStorage.getItem(cartKey);
  if (cartId != "undefined") {
    let response = await fetch(url + "mySQvwKGyfE2c3V", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartId }),
    });

    let data = JSON.parse(await response.text());
    if (data?.status == 200 && data?.data) {
      let cdata = JSON.parse(data.data);
      return cdata;
    } else {
      return Promise.resolve({});
    }
  } else {
    localStorage.removeItem(cartKey);
    localStorage.removeItem(rechargeKey);
  }
}

export async function updateCartItems({ items, setState }) {
  let cartId = localStorage.getItem(cartKey);
  let response = await fetch(url + "YcC1alhmz79M9hX", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: { cartId, items } }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve();
  }
}

export async function removeCartItems({ lineIds }) {
  let cartId = localStorage.getItem(cartKey);
  let response = await fetch(url + "Pv5fAU3y0kcdSn1", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: { cartId, lineIds } }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve();
  }
}

export async function RecoverUser({ token }) {
  let response = await fetch(url + "fJYT4mBk471HEIA1", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let yotpo = data.yotpodata;
    data = JSON.parse(data.data);
    return { data, yotpo };
  } else {
    return Promise.resolve();
  }
}

export async function GetUserDetails({ loginFields, handler }) {
  let response = await fetch(url + "mkePKgMXBOG5czi", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: loginFields }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}
export async function getCustomerDetails({ token, setCustomer }) {
  let response = await fetch(url + "cyiqHzFgJ1jabHp", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  let data = JSON.parse(await response.text());
  if (data?.status == 200 && data?.data) {
    let cdata = JSON.parse(data.data);
    return cdata;
  } else {
    return Promise.resolve({});
  }
}

export function RechargeCart({ items, isNotToken = false }) {
  return fetchRechargeCart()
    .then((response) => {
      let line_items = response?.data?.checkout?.line_items || [];
      let itemList = [];
      let alreadyStatus = false;
      line_items.map(
        ({
          external_product_id,
          external_variant_id,
          quantity,
          subscription_preferences,
        }) => {
          if (
            items[0].external_product_id == external_product_id &&
            items[0].external_variant_id == external_variant_id &&
            items[0].subscription_preferences.charge_interval_frequency ==
              subscription_preferences.charge_interval_frequency &&
            items[0].subscription_preferences.interval_unit ==
              subscription_preferences.interval_unit
          ) {
            alreadyStatus = true;
            itemList.push({
              external_product_id,
              external_variant_id,
              quantity: quantity + items[0].quantity,
              subscription_preferences,
            });
          } else {
            itemList.push({
              external_product_id,
              external_variant_id,
              quantity,
              subscription_preferences,
            });
          }
        }
      );
      let list = [];
      if (alreadyStatus) {
        list = items;
      } else {
        list = itemList.concat(items);
      }
      if (isNotToken) {
        list = items;
      }
      let token = localStorage.getItem(rechargeKey) || null;
      if (token == "undefined") token = null;
      let data = {
        token,
        raw: { line_items: list },
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      return fetch(url + "UaosjL62YwOcnol", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(rechargeKey, data?.data?.checkout?.token);
          return data;
        });
    })
    .catch((err) => {
      console.log(err);
    });
}
export function RechargeCartAItemRemove({ item }) {
  return fetchRechargeCart()
    .then((response) => {
      let line_items = response?.data?.checkout?.line_items || [];
      let itemList = [];
      line_items.map(
        ({
          external_product_id,
          external_variant_id,
          quantity,
          subscription_preferences,
        }) => {
          if (
            !(
              external_product_id.ecommerce ==
                item.external_product_id.ecommerce &&
              external_variant_id.ecommerce ==
                item.external_variant_id.ecommerce &&
              subscription_preferences.charge_interval_frequency ==
                item.subscription_preferences.charge_interval_frequency &&
              subscription_preferences.interval_unit ==
                item.subscription_preferences.interval_unit
            )
          ) {
            itemList.push({
              external_product_id,
              external_variant_id,
              quantity,
              subscription_preferences,
            });
          }
        }
      );
      let token = localStorage.getItem(rechargeKey) || null;
      if (token == "undefined") token = null;
      let data = {
        token,
        raw: { line_items: itemList },
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      return fetch(url + "UaosjL62YwOcnol", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          // console.log({aaa:data?.data?.checkout});
          if (data?.data?.checkout?.line_items?.length == 0) {
            localStorage.removeItem(rechargeKey);
          }
          return data;
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function RechargeCartAItemQTYUpdate({ item }) {
  return fetchRechargeCart()
    .then((response) => {
      let line_items = response?.data?.checkout?.line_items || [];
      let itemList = [];
      line_items.map(
        ({
          external_product_id,
          external_variant_id,
          quantity,
          subscription_preferences,
        }) => {
          if (
            external_product_id.ecommerce ==
              item.external_product_id.ecommerce &&
            external_variant_id.ecommerce ==
              item.external_variant_id.ecommerce &&
            subscription_preferences.charge_interval_frequency ==
              item.subscription_preferences.charge_interval_frequency &&
            subscription_preferences.interval_unit ==
              item.subscription_preferences.interval_unit
          ) {
            itemList.push({
              external_product_id,
              external_variant_id,
              quantity: item.quantity,
              // quantity:quantity+item.quantity,
              subscription_preferences,
            });
          } else {
            itemList.push({
              external_product_id,
              external_variant_id,
              quantity,
              subscription_preferences,
            });
          }
        }
      );
      let token = localStorage.getItem(rechargeKey) || null;
      if (token == "undefined") token = null;
      let data = {
        token,
        raw: { line_items: itemList },
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      return fetch(url + "UaosjL62YwOcnol", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          // console.log({data});
          if (data?.data?.checkout?.line_items?.length == 0) {
            localStorage.removeItem(rechargeKey);
          }
          return data;
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchRechargeCart() {
  let token = localStorage.getItem(rechargeKey) || null;
  if (token == "undefined") token = null;
  if (token) {
    let data = {
      token,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    return fetch(url + "UaosjL62YwOcnol", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  } else {
    return Promise.resolve();
  }
}
