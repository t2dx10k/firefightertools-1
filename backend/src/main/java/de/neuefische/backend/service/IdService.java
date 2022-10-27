package de.neuefische.backend.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IdService {

    public static void main(String[] args) {
        System.out.println(generateID2());
    }

    public String generateID(){
        return UUID.randomUUID().toString();
    }

    public static String generateID2(){
        return UUID.randomUUID().toString();
    }

}
