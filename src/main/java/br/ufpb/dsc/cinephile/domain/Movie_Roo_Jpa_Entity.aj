// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package br.ufpb.dsc.cinephile.domain;

import br.ufpb.dsc.cinephile.domain.Movie;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

privileged aspect Movie_Roo_Jpa_Entity {
    
    declare @type: Movie: @Entity;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long Movie.id;
    
    @Version
    @Column(name = "version")
    private Integer Movie.version;
    
    public Long Movie.getId() {
        return this.id;
    }
    
    public void Movie.setId(Long id) {
        this.id = id;
    }
    
    public Integer Movie.getVersion() {
        return this.version;
    }
    
    public void Movie.setVersion(Integer version) {
        this.version = version;
    }
    
}
