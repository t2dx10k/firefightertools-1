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

    public Tool addTool(Tool postTool){
        Tool newTool = Tool.builder()
                ._id(idService.generateID())
                .name(postTool.getName())
                .img(postTool.getImg())
                .description(postTool.getDescription())
                .video(postTool.getVideo())
                .link(postTool.getLink())
                .quizQuestion(postTool.getQuizQuestion())
                .choiceA(postTool.getChoiceA())
                .choiceB(postTool.getChoiceB())
                .choiceC(postTool.getChoiceC())
                .correctChoice(postTool.getCorrectChoice())
                .incorrectChoice(postTool.getIncorrectChoice())
                .favourite(postTool.getFavourite())
                .build();

        return repo.save(newTool);
    }

    public void deleteTool(String id) {
        repo.deleteById(id);
    }
}
