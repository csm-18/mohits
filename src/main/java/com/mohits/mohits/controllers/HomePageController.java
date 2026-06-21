package com.mohits.mohits.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {

    // Matches any route that doesn't start with /api and doesn't contain a file extension (.)
    @GetMapping(value = "{path:^(?!api)[^\\.]*}")
    public String redirect() {
        return "forward:/index.html";
    }
}