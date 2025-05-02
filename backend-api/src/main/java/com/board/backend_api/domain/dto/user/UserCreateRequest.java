package com.board.backend_api.domain.dto.user;

import com.board.backend_api.domain.entity.UserEntity;

public record UserCreateRequest(String email,String password, String name) {

	public UserEntity toEntity() {
		return UserEntity.builder()
				.email(email).password(password).name(name)
				.build();
	}

}
