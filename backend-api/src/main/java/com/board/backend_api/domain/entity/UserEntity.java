package com.board.backend_api.domain.entity;

import org.hibernate.annotations.DynamicUpdate;

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
@SequenceGenerator(name = "gen_seq_users",
	sequenceName = "seq_users", allocationSize = 1, initialValue = 1001
)
@Table(name = "users")
@Entity
public class UserEntity extends BaseEntity{
	
	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gen_seq_users")
	private Long id;
	
	@Column(nullable = false, unique = true,columnDefinition = "varchar(255) COLLATE utf8mb4_bin")
	private String email;
	@Column(nullable = false)
	private String password;
	private String name;

}
