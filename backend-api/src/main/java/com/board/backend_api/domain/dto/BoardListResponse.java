package com.board.backend_api.domain.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BoardListResponse {
	
	private Long id;
	private String title;
	private int readCount;
	
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
	private LocalDateTime updatedAt;
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
	private LocalDateTime createdAt;
	
	//날짜데이터를 년-월-일,시:분:초 로 구분해서 출력하기위해 만든 편의메서드
	//사용방법? 리액트에서 {객체.formattedDate}
	public String getFormattedDate() {
		if(createdAt.toLocalDate().equals(LocalDate.now())) {
			return createdAt.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
		}
		return createdAt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	}
}
