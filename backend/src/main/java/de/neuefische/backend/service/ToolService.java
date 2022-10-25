package de.neuefische.backend.service;

import de.neuefische.backend.repository.FireFighterToolsRepo;
import org.springframework.stereotype.Service;

@Service
public class ToolService {

    private final FireFighterToolsRepo repo;

    private final IdService idService;

    public ToolService(FireFighterToolsRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

}
