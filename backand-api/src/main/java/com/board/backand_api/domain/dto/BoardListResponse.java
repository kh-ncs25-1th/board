package com.board.backand_api.domain.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BoardListResponse {
	
	private Long id;
	private String title;
	private int readCount;
	
	private LocalDateTime updatedAt;
}
