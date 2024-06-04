import React from 'react';

const ChildComponent1 = () => {
  return <div class="container">
  <nav class="navbar">
<div class="container-fluid">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>                        
    </button>
    <a class="navbar-brand" href="#">
    <img class='' src="./uifry.png" alt="effect4" height={34.41} width={106.18}></img>
    </a>
  </div>
  <div class="collapse navbar-collapse" id="myNavbar">
    <ul class="nav navbar-nav">
      <li class="active home"><a href="#">Home</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <ul class="nav navbar-right">
    <button type="button" class="btn btn-primary btn-block">Downloand</button>
    </ul>
  </div>
  <div class="container">
  <img class="star" src="./Star3.png" alt="effect4" height={48} width={48}></img>
  
  </div>
</div>
</nav>
</div>;

  
    };

    const ChildComponent2 = () => {
        return <div class="container">
            <div class="row">
            <div class="col-sm-6">
                <div class="well-lg topic">
                {/* <img class='mt-3' src="./best.png" alt="effect4" height={128} width={618}></img>  */}
                <h1>make the best financial decisions</h1>
                </div>
                <div class="well-lg intro">
                {/* <img class='mt-5' src="./lorem1.png" alt="effect4" height={56} width={638}></img> */}
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </div>
                <div class="well-lg start">
                <span><button type="button" class="btn btn-primary btn-block">Get Started
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button></span>
                <span>
                    <i class="fa fa-play-circle-o"></i>
                    <button type="button" class="start1">Watch Video</button>
                </span>
                </div>
                <div class="well-lg">
                <img src="./Star3.png" alt="stars" height={48} width={48}></img>
                <img class='mt-5' src="./Group-1.png" alt="effect4" height={357.74} width={569}></img>
                </div>
            </div>
            <div class="col-sm-6">
            <div class="well-lg">
                <img class='iphone-1' src="./iphone-1.png" alt="effect4" height={504.32} width={249.25}></img> 
                </div>
                <div class="well-lg">
                <img class='iphone-2' src="./iphone-2.png" alt="effect4" height={505.02} width={249.59}></img>
                </div>
                <div class="well-lg">
                <img class='iphone-3' src="./iphone-3.png" alt="effect4" height={504.32} width={249.25}></img>
                </div>
                <div class="well-lg">
                <img class='frame1' src="./frame1.png" alt="effect4" height={760.63} width={645}></img>
                </div>
            </div>
            </div>
            <br></br>
        </div>
        
        ;
    };
    
    const ChildComponent3 = () => {
      return <div class="container">
        <div class="row">
      <div class="col-sm-8">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
    
          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner" role="listbox">
            <div class="item active">
            <img class='mt-3' src="./iphone-1.png" alt="effect4" height={100} width={200}></img>
              <div class="carousel-caption">
                <h3>Sell $</h3>
                <p>Money Money.</p>
              </div>      
            </div>
    
            <div class="item">
            <img class='mt-3' src="./iphone-2.png" alt="effect4" height={100} width={200}></img>
              <div class="carousel-caption">
                <h3>More Sell $</h3>
                <p>Lorem ipsum...</p>
              </div>      
            </div>
          </div>
    
          {/* <!-- Left and right controls --> */}
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="well">
          <p>Mobile price..</p>
        </div>
        <div class="well">
           <p>Mobile Features..</p>
        </div>
        <div class="well">
           <p>Buy</p>
        </div>
      </div>
    </div>
    </div>;
      };
    
    
    export { ChildComponent1, ChildComponent2,  ChildComponent3 };