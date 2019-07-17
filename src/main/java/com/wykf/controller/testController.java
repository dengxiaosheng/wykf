package com.wykf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/index")
@Controller
public class testController {
    @RequestMapping("/index")
    public String index(){
        System.out.println("进入index方法---------------------------------");
        return "index";
    }
}
