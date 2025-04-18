package com.board.backand_api.service;

import org.springframework.http.ResponseEntity;

import com.board.backand_api.domain.dto.BoardSaveRequst;

public interface BoardService {

	ResponseEntity<?> createBoard(BoardSaveRequst dto);

	ResponseEntity<?> getBoardList();

}
