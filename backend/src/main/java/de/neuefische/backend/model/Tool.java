package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("tools")
public class Tool {

    @Id
    private String id;
    private String name;
    private String img;
    private String description;
    private String link;
    private String video;
    private String quizQuestion;
    private String choiceA;
    private String choiceB;
    private String choiceC;
    private String trueChoice;
    private String falseChoice;
    private String favorite;

}