xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"page1",
                        "imageClass":"xui-icon-xui"
                    },
                    {
                        "id":"b",
                        "caption":"page2"
                    },
                    {
                        "id":"c",
                        "caption":"page3"
                    },
                    {
                        "id":"d",
                        "caption":"page4",
                        "closeBtn":true,
                        "optBtn":"xui-uicmd-opt",
                        "popBtn":true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a"),
                "main"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input13")
                .setLeft("9.904761904761905em")
                .setTop("13.714285714285714em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true),
                "a"
            );
            
            append(
                xui.create("xui.MQTT")
                .setHost(host,"xui_mqtt1")
                .setServer("99.80.80.150")
                .setPort("1883")
                .setPath("unipi817150")
                .setUserName("admin")
                .setPassword("Master")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});