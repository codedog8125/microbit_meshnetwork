//  === system setup ===
// sets up the radio
radio.setGroup(27)
radio.setTransmitPower(7)
//  shows that it is ready
basic.showIcon(IconNames.Yes)
//  === varibele setup ===
//  gives the node config to be use later and to check info
let node_conifg = {
    "node_ID" : "SN-1",
    "node_firmware" : "1-beta",
    "node_enabled" : true,
}

//  sets up the network conifg to pull data form later
let network_config = {
    "node_ID" : node_conifg["node_ID"],
    "SN_network_IDs" : ["SN-1", "SN-2"],
    "UN_network_IDs" : ["UN-1", "UN-2"],
}

let message_data = {
    "msg_type" : 1,
    "UN_recevied_list" : ["UN-2"],
    "SN_recevied_list" : ["SN-2"],
    "hop_count" : 2,
}

//  === funtion setup ===
//  makes the message ready for use to be sent or receved
function prase(string: any): string {
    return "testdata"
}

function stringify(data: any) {
    
}

//  === the code start ===
basic.forever(function on_forever() {
    if (node_conifg["node_enabled"] == true) {
        radio.onReceivedString(function on_received_string(receivedString: string) {
            
        })
    } else {
        basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    }
    
})
