package br.ufpb.dsc.cinephile.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.roo.addon.json.RooJson;
import javax.persistence.Column;

@RooJavaBean
@RooToString
@RooJpaActiveRecord
@RooJson
public class User {

    /**
     */
    @NotNull
    @Size(min = 3)
    private String name;

    /**
     */    
    @NotNull
    @Column(unique = true)    
    private String email;

    /**
     */
    @NotNull
    private String password;

    /**
     */
    @NotNull
    private String userType;
}
