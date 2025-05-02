package com.board.backend_api.domain.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;

@Getter
@MappedSuperclass
public abstract class BaseEntity {
	
	@CreationTimestamp//자동으로적용
	@Column(columnDefinition = "timestamp")
	private LocalDateTime createdAt;
	
	@UpdateTimestamp//자동으로적용
	@Column(columnDefinition = "timestamp")
	private LocalDateTime updatedAt;

}
