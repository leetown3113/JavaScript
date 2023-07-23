
var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
};

$done({body : JSON.stringify(chxm1023)});
