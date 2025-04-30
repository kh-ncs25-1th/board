package com.board.backend_api.domain.dto.board;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import com.board.backend_api.domain.entity.BoardEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BoardDeatilResponse {
	
	private Long id;
	private String title;
	private String content;
	
	private int readCount;//조회수 update는 전처리,후처리
	
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
	private LocalDateTime updatedAt;
	
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
	private LocalDateTime createdAt;
	
	
	//entity->dto 매핑메서드
	public static BoardDeatilResponse fromEntity(BoardEntity entity) {
		return BoardDeatilResponse.builder()
				.id(entity.getId())
				.title(entity.getTitle())
				.content(entity.getContent())
				.readCount(entity.getReadCount())
				.updatedAt(entity.getUpdatedAt())
				.createdAt(entity.getCreatedAt())
				.build();
	}

	

}
