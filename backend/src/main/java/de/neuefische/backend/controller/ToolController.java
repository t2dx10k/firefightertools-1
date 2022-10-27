package de.neuefische.backend.controller;

import de.neuefische.backend.model.Tool;
import de.neuefische.backend.service.ToolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fft")
public class ToolController {

    private final ToolService service;

    @Autowired
    public ToolController(ToolService service) {
        this.service = service;
    }

    @GetMapping
    public List<Tool> getAllTools(){
        return service.findAllTools();
    }
}
