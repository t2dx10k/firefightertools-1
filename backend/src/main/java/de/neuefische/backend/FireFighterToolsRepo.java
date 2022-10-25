package de.neuefische.backend;

import de.neuefische.backend.model.Tool;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FireFighterToolsRepo extends MongoRepository<Tool, String> {

}
