
# approve

授权代理 - W

## Hash
0x095ea7b3

## 请求方式

POST
## 请求参数
|  参数名       | 必选           | 类型  | 说明 | 
| ------------- |:-------------:| -----:| ----- |
| spender      | 是 | address |  代理地址 | 
| value      | 是 | uint256 |  代理额度 | 
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
bool True, 返回True或者调用失败
```json
 {
    "error_code": 0,
    "data": {}
  }
```

## 备注
无