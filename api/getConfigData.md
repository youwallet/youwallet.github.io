# getConfigData

获取订单参数中的data - R
## hash
0xfeee047e

## 请求URL

http://xx.com/api/user/login
## 请求方式

POST
## 请求参数
|  参数名       | 必选           | 类型  | 说明 | 
| ------------- |:-------------:| -----:| ----- |
| is_sell      | 是 | bytes32 | true 为卖单, false 为买单 | 

## 请求示例
```json
{
  "jsonrpc": 2.0,
  "method": "eth_call",
  "id": "当前时间戳",
  "params": [
  	{"to": Global.tempMatchAddress}
  	"latest"
  ]
}
```

## 返回示例
```json
 {
    "error_code": 0,
    "data": {}
  }
```

## 备注
无