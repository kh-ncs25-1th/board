package com.board.backend_api.domain.dto.user;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.board.backend_api.domain.entity.UserEntity;

public record UserRequest(String email, String password,String name) {

	
	public UserEntity toEntity(PasswordEncoder passwordEncoder) {
		return UserEntity.builder()
				.email(email)
				.password(passwordEncoder.encode(password))
				.name(name)
				.build();
	}

}
