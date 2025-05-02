package com.board.backend_api.domain.dto.user;

import java.time.LocalDateTime;

import com.board.backend_api.domain.entity.UserEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserResponse {
	private Long id;
	private String email;
	private String name;
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
	private LocalDateTime updatedAt;
	
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
	private LocalDateTime createdAt;;
	
	public static UserResponse fromEntity(UserEntity entity) {
		return UserResponse.builder()
				.id(entity.getId())
				.email(entity.getEmail())
				.name(entity.getName())
				.createdAt(entity.getCreatedAt())
				.updatedAt(entity.getUpdatedAt())
				.build();
	}
}
