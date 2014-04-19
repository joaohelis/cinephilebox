package br.ufpb.dsc.cinephile.domain;
import org.junit.Test;
import org.junit.Assert;
import org.springframework.roo.addon.test.RooIntegrationTest;

@RooIntegrationTest(entity = Category.class)
public class CategoryIntegrationTest {

    @Test
    public void testMarkerMethod() {
    }

    @Test
    public void testCategoryAndMovieIntegration(){
      Movie movie = new Movie();
      movie.setTitle("The Iron Man");
      movie.setBirthplace("EUA");
      movie.setReleaseYear(2014);
      movie.setSinopse("Very cool!!");
      movie.setStockQuantity(20);
      movie.setCoverPicture("");

      Category category = new Category();
      category.setName("Category test");

      category.addMovie(movie);

      Assert.assertNotNull(category.getMovieByTitle(movie.getTitle()));
    }
}
