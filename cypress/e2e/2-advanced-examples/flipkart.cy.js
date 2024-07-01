describe("test sue of fipkart",()=>{
    it("testcase for flipkart",()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('input[title="Search for Products, Brands and More"]').type('samsungphones{enter}')
        cy.get('a[rel="noopener noreferrer"]').first().invoke("removeAttr","target").click()
        cy.wait(3000)
        //cy.get('ul[class="row"]').find('li[class="col col-6-12"]').first().click()
        //cy.contains('Add to cart').click()
        cy.get('[id="container"]>div>div:nth-child(3)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div>ul>li:nth-child(1)').click()
    })

    it("testexample",()=>{
        cy.viewport(1980,1020)
        cy.visit('https://www.functionize.com/h/test-automation?utm_source=google&utm_medium=paid%20search&utm_campaign=automated%20web%20testing&utm_term=automated%20web%20application%20testing&utm_campaign=Z+-+India+-+Automated+Web+Testing&utm_source=adwords&utm_medium=ppc&hsa_acc=5488573823&hsa_cam=16375912712&hsa_grp=133300773506&hsa_ad=583785827749&hsa_src=g&hsa_tgt=kwd-298529757341&hsa_kw=automated%20web%20application%20testing&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwhIS0BhBqEiwADAUhc2kqoRLducaUq2keepW8ENYXCNTwB62Cr2qFGJCt_21RoJhaDRN3HBoC074QAvD_BwE')
        cy.get('div[id="w-dropdown-toggle-0"]').trigger('mouseover')
        cy.get('a[href="/functional-testing"]').first().then((data)=>{
            var data1=data.text()
            cy.log(data1)
            data1=data1.toLowerCase()
        cy.get('div[class="meganav-left"]').contains('Functional Testing').click({force:true})
        cy.get('h1[class="heading-jumbo"]').then((data)=>{
            var data2=data.text()
            data2=data2.toLowerCase()
            expect(data2).to.equal(data1)
        })
        })
    })
    it('Add to cart example',()=>{
        cy.viewport(1980,1020)
        cy.visit('https://react-shopping-cart-project.netlify.app/')
        cy.get('button[type="button"]').click({multiple:true})
        var total=[]
        var totalcost=0
        cy.get('h3[class="price"]').each((price) => {
            const priceText = price.text();
            const priceWithoutCurrency = priceText.replace('₹', '').replace(',','').replace(',','').trim();
            const priceInNumber = Number(priceWithoutCurrency);
            cy.log(priceInNumber);
            total.push(priceInNumber);
            totalcost=totalcost+priceInNumber
            cy.log("total cost "+totalcost)
          })
          cy.get('div[title="Cart"]').click()
          cy.get('div[class="cart_content"]>div:nth-child(3)>h3>b').then((totalamount)=>{
            var totalprice=totalamount.text()
            var withoutrupie=totalprice.replace('₹','').replace(',','').replace(',','')
            var numberinrupie=Number(withoutrupie)
            cy.log(numberinrupie)
            expect(numberinrupie).to.equal(totalcost)
          })

          cy.get('h4[class="title"]').each((tes)=>{
            var name=tes.text()
            cy.log(name)
            cy.get('div[class="cart_body"]>div>div>h4').each((pname)=>{
                var cartnames=pname.text()
                expect(cartnames).to.equal(name)
              })
          })
          
        // var totalcost=0
        // for(let i=0;i<=total.length-1;i++){
        //     var totalcost=totalcost+total[i]
        // }
        
    })
        it.only('should add all items to the cart and validate the total price and item names', () => {
          cy.viewport(1980, 1020);
          cy.visit('https://react-shopping-cart-project.netlify.app/');
          
          // Click on all "Add to Cart" buttons
          cy.get('button[type="button"]').click({ multiple: true });
          
          // Arrays to store prices and names
          let prices = [];
          let names = [];
          let totalCost = 0;
      
          // Get all prices and store them in the array
          cy.get('h3[class="price"]').each((price) => {
            const priceText = price.text();
            const priceWithoutCurrency = priceText.replace('₹', '').replace(/,/g, '').trim();
            const priceInNumber = Number(priceWithoutCurrency);
            cy.log(priceInNumber);
            prices.push(priceInNumber);
            totalCost += priceInNumber;
            cy.log("Total cost: " + totalCost);
          });
      
          // Get all item names and store them in the array
          cy.get('h4[class="title"]').each((item) => {
            const name = item.text();
            cy.log(name);
            names.push(name);
          }).then(() => {
            // Click on the Cart icon
            cy.get('div[title="Cart"]').click();
            
            // Verify the total amount in the cart
            cy.get('div[class="cart_content"]>div:nth-child(3)>h3>b').then((totalAmount) => {
              const totalPriceText = totalAmount.text();
              const priceWithoutCurrency = totalPriceText.replace('₹', '').replace(/,/g, '').trim();
              const totalPrice = Number(priceWithoutCurrency);
              cy.log(totalPrice);
              expect(totalPrice).to.equal(totalCost);
            });
      
            // Verify each item name in the cart
            cy.get('div[class="cart_body"]>div>div>h4').each((cartItem, index) => {
              const cartItemName = cartItem.text();
              expect(cartItemName).to.equal(names[index]);
            });
          });
        });
      });
            
