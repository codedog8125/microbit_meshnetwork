import radio, datalogger

# === system setup ===

#sets up the radio
radio.set_group(27)
radio.set_transmit_power(7)

# shows that it is ready
basic.show_icon(IconNames.YES)
# === varibele setup ===

# gives the node config to be use later and to check info
node_conifg = { 
    "node_ID" : "SN-1", 
    "node_firmware" : "1-beta",
    "node_enabled" : True
}

# sets up the network conifg to pull data form later
network_config = {
    "node_ID" : node_conifg["node_ID"],
    "SN_network_IDs" : ["SN-1", "SN-2"],
    "UN_network_IDs" : ["UN-1", "UN-2"]
}


message_data = {
    "msg_type" : 1,
    "UN_recevied_list" :["UN-2"],
    "SN_recevied_list" : ["SN-2"],
    "hop_count" : 2
}

# === funtion setup ===
# makes the message ready for use to be sent or receved
def prase(string):
    return "testdata"
def stringify(data):
    pass

def on_received_string(receivedString):
    
    pass 


# === the code start ===
def on_forever():
    if node_conifg["node_enabled"] == True:
        radio.on_received_string(on_received_string)
    else:
        basic.show_leds("""
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        """)


basic.forever(on_forever)