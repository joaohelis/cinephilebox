// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package br.ufpb.dsc.cinephile.domain;

import br.ufpb.dsc.cinephile.domain.Movie;
import flexjson.JSONDeserializer;
import flexjson.JSONSerializer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

privileged aspect Movie_Roo_Json {
    
    public String Movie.toJson() {
        return new JSONSerializer()
        .exclude("*.class").deepSerialize(this);
    }
    
    public String Movie.toJson(String[] fields) {
        return new JSONSerializer()
        .include(fields).exclude("*.class").deepSerialize(this);
    }
    
    public static Movie Movie.fromJsonToMovie(String json) {
        return new JSONDeserializer<Movie>()
        .use(null, Movie.class).deserialize(json);
    }
    
    public static String Movie.toJsonArray(Collection<Movie> collection) {
        return new JSONSerializer()
        .exclude("*.class").deepSerialize(collection);
    }
    
    public static String Movie.toJsonArray(Collection<Movie> collection, String[] fields) {
        return new JSONSerializer()
        .include(fields).exclude("*.class").deepSerialize(collection);
    }
    
    public static Collection<Movie> Movie.fromJsonArrayToMovies(String json) {
        return new JSONDeserializer<List<Movie>>()
        .use("values", Movie.class).deserialize(json);
    }
    
}
