[@tauri-apps/api](../README.md) / [http](../modules/http.md) / Client

# Class: Client

[http](../modules/http.md).Client

## Properties

### id

• **id**: `number`

#### Defined in

[http.ts:225](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L225)

## Methods

### delete

▸ **delete**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a DELETE request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:369](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L369)

___

### drop

▸ **drop**(): `Promise`<`void`\>

Drops the client instance.

#### Returns

`Promise`<`void`\>

#### Defined in

[http.ts:236](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L236)

___

### get

▸ **get**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a GET request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:297](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L297)

___

### patch

▸ **patch**<`T`\>(`url`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a PATCH request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:354](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L354)

___

### post

▸ **post**<`T`\>(`url`, `body?`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a POST request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:313](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L313)

___

### put

▸ **put**<`T`\>(`url`, `body?`, `options?`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes a PUT request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The request URL. |
| `body?` | [`Body`](http.Body.md) | The body of the request. |
| `options?` | [`RequestOptions`](../modules/http.md#requestoptions) | Request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:334](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L334)

___

### request

▸ **request**<`T`\>(`options`): `Promise`<[`Response`](http.Response.md)<`T`\>\>

Makes an HTTP request.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`HttpOptions`](../interfaces/http.HttpOptions.md) | The request options. |

#### Returns

`Promise`<[`Response`](http.Response.md)<`T`\>\>

A promise resolving to the response.

#### Defined in

[http.ts:252](https://github.com/tauri-apps/tauri/blob/cf22f4c/tooling/api/src/http.ts#L252)
