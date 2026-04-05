package com.sentinel.service;

import com.sentinel.model.AppUser;
import com.sentinel.repository.AppUserRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final AppUserRepository appUserRepository;

    public UserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }
}
