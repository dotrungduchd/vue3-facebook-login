---
outline: deep
---

# Props and Demo Examples

This page demonstrates usage of props and events provided by HFaceBookLogin.

## Props & Events

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appId | `String` | `null` | Your Facebook login appId. |
| version | `String` | `v18.0` | Facebook SDK version, default it latest version provide from Facebook |
| scope | `String` | `null` | Read more about permission you want user share for your app https://developers.facebook.com/docs/permissions/ |
| fields | `String` | `null` | Auth info you want to retrieve after authenticating from login popup |
| onSuccess | `Function` | `null` | Callback that emit auth response after login popup close (response) |
| onFailure | `Function` | `null` | Callback that show error after login popup close |

### Please note that, you can only get your item within scope if your FB login app is granted access from facebook

*(response): 
- if you have not define fields, this is response format:
```

{
  "authResponse": {
    "userID": "your fb user id",
    "expiresIn": 'expire time',
    "accessToken": "accessToken",
    "signedRequest": "String",
    "graphDomain": "facebook",
    "data_access_expiration_time": ''
  },
  "status": "connected"
}
```

- if you have define fields, this is response format:

```
{
  "authResponse": {
    "userID": "your fb user id",
    "expiresIn": 'expire time',
    "accessToken": "accessToken",
    "signedRequest": "String",
    "graphDomain": "facebook",
    "data_access_expiration_time": ''
  },
  "status": "connected",
  "authInfo": {
    // info that match your scope 
  }
}
```
See the [FaceBook Graph API](https://developers.facebook.com/tools/explorer) for more information about scope.

See the [Vue3 FaceBook Login](https://www.npmjs.com/package/@dotrungduchd/vue3-facebook-login) package for more information.


## Demo Examples

Here we display a list of settings that could be applied within an application.

<script setup lang="ts">
import { ref, reactive } from 'vue'
import pkg from "@dotrungduchd/vue3-facebook-login";
const { HFaceBookLogin } = pkg

const appState = reactive({
  appId: "391069538168549",
  scope: "email,public_profile",
  fields: "id,email",
  authInfo: undefined
})

const onSuccess = (response) => {
  appState.authInfo = response
  console.log(appState.authInfo)
}

const onFailure = () => {
  alert('Please check your appId and scope')
}
</script>
<div>Enter app id, scope, fields and click auth button bellow:</div>
<input v-model="appState.appId" placeholder="app id" style="width: 400px;border: 1px solid #4caf50;padding: 5px;border-radius: 5px;margin-bottom: 8px" /> <br />
<input v-model="appState.fields" placeholder="id,name,email,first_name,last_name,birthday..." style="width: 400px;border: 1px solid #4caf50;padding: 5px;border-radius: 5px" />
<input v-model="appState.scope" placeholder="email,public_profile" style="width: 400px;border: 1px solid #4caf50;padding: 5px;border-radius: 5px" />

<div style="margin-top: 12px" v-if="appState.appId">
  <HFaceBookLogin
    v-slot="fbLogin"
    :app-id="appState.appId"
    :scope="appState.scope"
    :fields="appState.fields"
    @onSuccess="onSuccess"
    @onFailure="onFailure"
  >
    <span @click="fbLogin.initFBLogin" class="fb-button">Login with facebook</span>
  </HFaceBookLogin>
</div>

<div class="authContent">
  <div v-if="appState.authInfo?.authInfo">Your auth info: {{ appState.authInfo?.authInfo }}</div>
  <div v-if="appState.authInfo">
    Your token info: {{ appState.authInfo?.authResponse }}
  </div>
</div>
