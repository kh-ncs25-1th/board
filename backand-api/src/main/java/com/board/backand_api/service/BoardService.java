package com.board.backand_api.service;

import org.springframework.http.ResponseEntity;

import com.board.backand_api.domain.dto.BoardSaveRequst;
import com.board.backand_api.domain.dto.BoardUpdateRequst;

public interface BoardService {

	ResponseEntity<?> createBoard(BoardSaveRequst dto);

	ResponseEntity<?> getBoardList();

	ResponseEntity<?> getBoard(Long id);

	ResponseEntity<?> updateBoard(Long id, BoardUpdateRequst dto);

	ResponseEntity<?> deleteBoard(Long id);

}
