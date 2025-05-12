package com.board.backend_api.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.board.backend_api.domain.dto.user.UserRequest;
import com.board.backend_api.domain.dto.user.UserResponse;
import com.board.backend_api.domain.entity.UserEntity;
import com.board.backend_api.domain.entity.UserEntityRepository;
import com.board.backend_api.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DefauleUserService implements UserService {
	
	private final UserEntityRepository repository;//DI
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public UserResponse create(UserRequest request) {
		
		UserEntity result=repository.save(request.toEntity(passwordEncoder));
		
		return UserResponse.fromEntity(result);
	}

}
