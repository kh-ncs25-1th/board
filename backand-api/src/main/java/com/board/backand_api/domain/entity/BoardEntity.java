package com.board.backand_api.domain.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

import com.board.backand_api.domain.dto.BoardListResponse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@DynamicUpdate
@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@SequenceGenerator(name = "board_seq_gen",
		sequenceName = "board_seq", initialValue = 101, allocationSize = 1)
@Table(name = "board")
@Entity
public class BoardEntity {
	
	@Id
	@GeneratedValue(generator = "board_seq_gen", strategy = GenerationType.SEQUENCE)
	@Column(name = "board_id")
	private Long id;//자동으로반영
	
	@Column(nullable = false)
	private String title;
	@Column(nullable = false)
	private String content;
	
	private int readCount;//default:0
	@CreationTimestamp//자동으로적용
	@Column(columnDefinition = "timestamp")
	private LocalDateTime createdAt;
	@UpdateTimestamp//자동으로적용
	@Column(columnDefinition = "timestamp")
	private LocalDateTime updatedAt;
	
	//편의 메서드
	public BoardListResponse toBoardListResponse() {
		return BoardListResponse.builder()
				.id(id).title(title).readCount(readCount).updatedAt(updatedAt)
				.build();
	}
}

