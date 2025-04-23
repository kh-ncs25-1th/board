package com.board.backend_api.domain.dto;

import com.board.backend_api.domain.entity.BoardEntity;

public record BoardSaveRequst(
		String title, 
		String content) {
	//record로 전달된 데이터를 Entity객체를 생성하는 메서드
	public BoardEntity toEntity() {
		return BoardEntity.builder()
				.title(title).content(content)
				.build();
	}
	
}
