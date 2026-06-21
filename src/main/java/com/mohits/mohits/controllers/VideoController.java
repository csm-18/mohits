package com.mohits.mohits.controllers;

import com.mohits.mohits.entity.Video;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:*")
public class VideoController {

    private Map<Long, Video> videoEntries = new HashMap<>();

    // for Getting all the videos on /api/videos
    @GetMapping("/videos")
    public List<Video> getVideos() {
        return new ArrayList<>(videoEntries.values());
    }

    @PostMapping("/videos") // post on /api/videos
    public void createVideos(@RequestBody Video myVideo) {
        videoEntries.put(myVideo.getId(), myVideo);
    }
}
