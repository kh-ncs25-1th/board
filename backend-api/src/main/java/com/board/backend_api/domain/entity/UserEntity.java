package com.board.backend_api.domain.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

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
@SequenceGenerator(name = "user_seq_gen",
sequenceName = "user_seq", initialValue = 1001, allocationSize = 1)
@Table(name = "user")
@Entity
public class UserEntity extends BaseEntity{
	
	@Id
	@GeneratedValue(generator = "user_seq_gen", strategy = GenerationType.SEQUENCE)
	@Column(name = "user_id")
	private Long id;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	
	private String name;
	

}
