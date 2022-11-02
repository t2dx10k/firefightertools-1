package de.neuefische.backend.service;

import de.neuefische.backend.model.Tool;
import de.neuefische.backend.repository.FireFighterToolsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ToolService {

    private final FireFighterToolsRepo repo;

    private final IdService idService;

    @Autowired
    public ToolService(FireFighterToolsRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Tool> findAllTools(){
        return repo.findAll();
    }



}
