package com.board.backend_api.service;

import java.util.List;

import com.board.backend_api.domain.dto.board.BoardDeatilResponse;
import com.board.backend_api.domain.dto.board.BoardListItemResponse;
import com.board.backend_api.domain.dto.board.BoardSaveRequst;
import com.board.backend_api.domain.dto.board.BoardUpdateRequst;

public interface BoardService {
	
	BoardListItemResponse create(BoardSaveRequst requst);

	List<BoardListItemResponse> list();

	BoardDeatilResponse get(Long id);

	BoardDeatilResponse update(Long id, BoardUpdateRequst requst);

	void delete(Long id);

}
