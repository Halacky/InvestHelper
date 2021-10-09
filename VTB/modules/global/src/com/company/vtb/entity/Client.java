package com.company.vtb.entity;

import com.esotericsoftware.kryo.NotNull;
import com.haulmont.cuba.core.entity.StandardEntity;
import com.haulmont.cuba.core.entity.annotation.OnDelete;
import com.haulmont.cuba.core.entity.annotation.OnDeleteInverse;
import com.haulmont.cuba.core.global.DeletePolicy;
import com.haulmont.cuba.security.entity.User;

import javax.persistence.*;
import java.math.BigDecimal;

@Table(name = "VTB_CLIENT")
@Entity(name = "vtb_Client")
public class Client extends StandardEntity {
    private static final long serialVersionUID = 2917137883708264294L;

    @OnDeleteInverse(DeletePolicy.CASCADE)
    @OnDelete(DeletePolicy.CASCADE)
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "User_id")
    @NotNull
    private User user;

    @NotNull
    @Column(name="balance")
    private BigDecimal balance;

    @NotNull
    @Column(name="completeCourse")
    private Integer completeCourse;

    @NotNull
    @Column(name="levelFinance")
    private Integer levelFinance;

    @NotNull
    @Column(name="timeFirstSession")
    private BigDecimal timeFirstSession;

    public BigDecimal getBalance() {
        return balance;
    }

    public Integer getCompleteCourse() {
        return completeCourse;
    }

    public void setCompleteCourse(Integer completeCourse) {
        this.completeCourse = completeCourse;
    }

    public Integer getLevelFinance() {
        return levelFinance;
    }

    public void setLevelFinance(Integer levelFinance) {
        this.levelFinance = levelFinance;
    }

    public BigDecimal getTimeFirstSession() {
        return timeFirstSession;
    }

    public void setTimeFirstSession(BigDecimal timeFirstSession) {
        this.timeFirstSession = timeFirstSession;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}