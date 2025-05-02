package com.board.backend_api.service.impl;

import org.springframework.stereotype.Service;

import com.board.backend_api.domain.dto.user.UserCreateRequest;
import com.board.backend_api.domain.dto.user.UserResponse;
import com.board.backend_api.domain.entity.UserEntity;
import com.board.backend_api.domain.entity.UserEntityRepository;
import com.board.backend_api.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DefaultUserService implements UserService{
	
	private final UserEntityRepository repository;

	@Override
	public UserResponse create(UserCreateRequest request) {
		// 회원을 DB저장 처리
		//UserEntity result=repository.save(request.toEntity());
		//return UserResponse.fromEntity(result);
		return UserResponse.fromEntity(repository.save(request.toEntity()));
	}

}
