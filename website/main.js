window.onload = (event) => {
  exibirInformacoesAcademicas();
  exibirSkills();
  exibirLanguages();
};

function checkAuthentication() {
  // Verificar se o usuário está autenticado
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== null;

  // Obter os elementos dos botões
  const createButton = document.getElementById('addAcademicBtn');
  const addSkillBtn = document.getElementById('addSkillBtn');
  const addLanguageBtn = document.getElementById('addLanguageBtn');
  // Obter os elementos dos botões de editar e excluir
  const editButtons = document.getElementsByClassName('edit-button');
  const deleteButtons = document.getElementsByClassName('delete-button');

  // Exibir ou ocultar os botões com base na autenticação
  createButton.style.display = isAuthenticated ? 'block' : 'none';
  addSkillBtn.style.display = isAuthenticated ? 'block' : 'none';
  addLanguageBtn.style.display = isAuthenticated ? 'block' : 'none';

  // Exibir ou ocultar os botões com base na autenticação
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].style.display = isAuthenticated ? 'inline-block' : 'none';
  }
  
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = isAuthenticated ? 'inline-block' : 'none';
  }
}

// Chamar a função de verificação de autenticação ao carregar a página
checkAuthentication();

function exibirSkills() {
  const url = 'http://localhost:4242/api/skills';

  // Obtém as habilidades do servidor
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Limpa o container de habilidades
      const skillContainer = document.getElementById('skillContainer');
      skillContainer.innerHTML = '';

      // Exibe cada habilidade no container
      data.forEach((skill) => {
        const { name, level } = skill;

        const skillName = document.createElement('p');
        skillName.textContent = name;

        const skillBar = document.createElement('div');
        skillBar.className = 'w3-light-grey w3-round-xlarge w3-small';

        const skillBarFill = document.createElement('div');
        skillBarFill.className = 'w3-container w3-center w3-round-xlarge w3-teal';
        skillBarFill.style.width = `${level}%`;

        const skillText = document.createElement('div');
        skillText.textContent = `${level}%`;
        skillBarFill.appendChild(skillText);

        skillBar.appendChild(skillBarFill);

        skillContainer.appendChild(skillName);
        skillContainer.appendChild(skillBar);
      });
    })
    .catch((error) => {
      console.error('Erro ao obter habilidades:', error);
    });
}

 // Obtém uma referência aos elementos relevantes
 const addSkillBtn = document.getElementById('addSkillBtn');
 const addModalSkill = document.getElementById('addModalSkill');
 const saveSkillBtn = document.getElementById('saveSkillBtn');
 const newSkillInput = document.getElementById('newSkill');
 const newLevelInput = document.getElementById('newLevel');
 const closeModalBtn = document.getElementById('closeModalBtn');

 // Define o evento de clique no botão de adicionar habilidade
 addSkillBtn.addEventListener('click', function() {
   // Exibe o modal de adição de habilidade
   addModalSkill.style.display = 'block';
 });

 // Define o evento de clique no botão "Fechar"
 closeModalBtn.addEventListener('click', function() {
 // Oculta a modal de adição de habilidade
 addModalSkill.style.display = 'none';
 });

 // Define o evento de clique no botão de salvar
 saveSkillBtn.addEventListener('click', function() {
   // Obtém os valores dos campos de adição
   const newSkill = newSkillInput.value;
   const newLevel = parseInt(newLevelInput.value);

   // Verifica se os valores são válidos
   if (!newSkill || newSkill.trim() === '' || isNaN(newLevel) || newLevel < 0 || newLevel > 100) {
     alert('Por favor, insira valores válidos para a habilidade e o nível.');
     return;
   }

   // Fecha o modal de adição de habilidade
   addModalSkill.style.display = 'none';

   // Crie os elementos HTML para exibir a nova habilidade
   const skillName = document.createElement('p');
   skillName.textContent = newSkill;

   const skillBar = document.createElement('div');
   skillBar.className = 'w3-light-grey w3-round-xlarge w3-small';

   const skillBarFill = document.createElement('div');
   skillBarFill.className = 'w3-container w3-center w3-round-xlarge w3-teal';
   skillBarFill.style.width = `${newLevel}%`;

   const skillText = document.createElement('div');
   skillText.textContent = `${newLevel}%`;
   skillBarFill.appendChild(skillText);

   skillBar.appendChild(skillBarFill);

   const skillContainer = document.getElementById('skillContainer');
   skillContainer.appendChild(skillName);
   skillContainer.appendChild(skillBar);

   const url = 'http://localhost:4242/api/skills/create';
   // Envia a nova habilidade para o servidor
   fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ name: newSkill, level: newLevel }),
   })
     .then((response) => response.json())
     .then((data) => {
       console.log('Nova habilidade criada:', data);
     })
     .catch((error) => {
       console.error('Erro ao criar habilidade:', error);
     });

   // Limpa os campos de adição
   newSkillInput.value = '';
   newLevelInput.value = '';
 });

 function exibirLanguages() {
  const url = 'http://localhost:4242/api/languages';

  // Obtém as Languages do servidor
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Limpa o container de Languages
      const languageContainer = document.getElementById('LanguageContainer');
      languageContainer.innerHTML = '';

      // Exibe cada Language no container
      data.forEach((language) => {
        const { name, level } = language;

        const languageName = document.createElement('p');
        languageName.textContent = name;

        const languageBar = document.createElement('div');
        languageBar.className = 'w3-light-grey w3-round-xlarge w3-small';

        const languageBarFill = document.createElement('div');
        languageBarFill.className = 'w3-container w3-center w3-round-xlarge w3-teal';
        languageBarFill.style.width = `${level}%`;

        const languageText = document.createElement('div');
        languageText.textContent = `${level}%`;
        languageBarFill.appendChild(languageText);

        languageBar.appendChild(languageBarFill);

        languageContainer.appendChild(languageName);
        languageContainer.appendChild(languageBar);
      });
    })
    .catch((error) => {
      console.error('Erro ao obter languages:', error);
    });
}

// Obtém uma referência aos elementos relevantes
const addLanguageBtn = document.getElementById('addLanguageBtn');
const addModalLanguage = document.getElementById('addModalLanguage');
const saveLanguageBtn = document.getElementById('saveLanguageBtn');
const newLanguageInput = document.getElementById('newLanguage');
const newLevelLanguagesInput = document.getElementById('newLevelLanguages');
const closeModalLanguagesBtn = document.getElementById('closeModalLanguagesBtn');

// Define o evento de clique no botão de adicionar Language
addLanguageBtn.addEventListener('click', function() {
  // Exibe o modal de adição de Language
  addModalLanguage.style.display = 'block';
});

// Define o evento de clique no botão "Fechar"
closeModalLanguagesBtn.addEventListener('click', function() {
  // Oculta a modal de adição de Language
  addModalLanguage.style.display = 'none';
});

// Define o evento de clique no botão de salvar
saveLanguageBtn.addEventListener('click', function() {
  // Obtém os valores dos campos de adição
  const newLanguage = newLanguageInput.value;
  const newLevel = parseInt(newLevelLanguagesInput.value);

  // Verifica se os valores são válidos
  if (!newLanguage || newLanguage.trim() === '' || isNaN(newLevel) || newLevel < 0 || newLevel > 100) {
    alert('Por favor, insira valores válidos para a Language e o nível.');
    return;
  }

  // Fecha o modal de adição de Language
  addModalLanguage.style.display = 'none';

  // Crie os elementos HTML para exibir a nova Language
  const languageName = document.createElement('p');
  languageName.textContent = newLanguage;

  const languageBar = document.createElement('div');
  languageBar.className = 'w3-light-grey w3-round-xlarge w3-small';

  const languageBarFill = document.createElement('div');
  languageBarFill.className = 'w3-container w3-center w3-round-xlarge w3-teal';
  languageBarFill.style.width = `${newLevel}%`;

  const languageText = document.createElement('div');
  languageText.textContent = `${newLevel}%`;
  languageBarFill.appendChild(languageText);

  languageBar.appendChild(languageBarFill);

  const languageContainer = document.getElementById('LanguageContainer');
  languageContainer.appendChild(languageName);
  languageContainer.appendChild(languageBar);

  const url = 'http://localhost:4242/api/languages/create';
  // Envia a nova Language para o servidor
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newLanguage, level: newLevel }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Nova Language criada:', data);
    })
    .catch((error) => {
      console.error('Erro ao criar Language:', error);
    });

  // Limpa os campos de adição
  newLanguageInput.value = '';
  newLevelLanguagesInput.value = '';
});


function exibirInformacoesAcademicas() {
  const url = 'http://localhost:4242/api/academic';

  // Obtém as informações acadêmicas do servidor
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Limpa o container de informações acadêmicas
      const academicContainer = document.getElementById('education');
      academicContainer.innerHTML = '';

      // Exibe cada informação acadêmica no container
      data.forEach((academic) => {
        const { id, degree, institution, graduationYear } = academic;

        const academicCard = document.createElement('div');
        academicCard.className = 'w3-container';

        const institutionHeader = document.createElement('h5');
        institutionHeader.className = 'w3-opacity';
        institutionHeader.textContent = institution;

        const graduationYearHeader = document.createElement('h6');
        graduationYearHeader.className = 'w3-text-teal';
        graduationYearHeader.innerHTML = `<i class="fa fa-calendar fa-fw w3-margin-right"></i>${graduationYear}`;

        const degreeParagraph = document.createElement('p');
        degreeParagraph.textContent = degree;

        academicCard.appendChild(institutionHeader);
        academicCard.appendChild(graduationYearHeader);
        academicCard.appendChild(degreeParagraph);

        // Botão de editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit-button'; // Adiciona a classe edit-button
        editButton.addEventListener('click', () => {
          // Preencher o modal com os dados da informação acadêmica
          const degreeInput = document.getElementById('editDegree');
          const institutionInput = document.getElementById('editInstitution');
          const graduationYearInput = document.getElementById('editGraduationYear');

          degreeInput.value = degree;
          institutionInput.value = institution;
          graduationYearInput.value = graduationYear;

          // Atualizar o evento de clique do botão de salvar do modal para enviar a requisição de atualização
          const saveEditAcademicBtn = document.getElementById('saveEditAcademicBtn');
          saveEditAcademicBtn.onclick = () => {
            // Obtém os novos valores dos campos de edição
            const newDegree = degreeInput.value;
            const newInstitution = institutionInput.value;
            const newGraduationYear = graduationYearInput.value;

            // Verifica se os valores são válidos
            if (!newDegree || newDegree.trim() === '' || !newInstitution || newInstitution.trim() === '' || !newGraduationYear || isNaN(newGraduationYear)) {
              alert('Por favor, insira valores válidos para o grau, instituição e ano de graduação.');
              return;
            }

            // Fecha o modal de edição
            const editAcademicModal = document.getElementById('editAcademicModal');
            editAcademicModal.style.display = 'none';

            // Atualiza a informação acadêmica no servidor
            const updateUrl = `http://localhost:4242/api/academic/update/${id}`;
            fetch(updateUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ degree: newDegree, institution: newInstitution, graduationYear: newGraduationYear }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Informação acadêmica atualizada:', data);
                // Atualizar a exibição das informações acadêmicas
                exibirInformacoesAcademicas();
              })
              .catch((error) => {
                console.error('Erro ao atualizar informação acadêmica:', error);
              });
          };

          // Exibir o modal de edição
          const editAcademicModal = document.getElementById('editAcademicModal');
          editAcademicModal.style.display = 'block';

          // Botão de fechar do modal de edição
          const closeEditAcademicBtn = document.getElementById('closeEditAcademicBtn');
          closeEditAcademicBtn.addEventListener('click', () => {
          editAcademicModal.style.display = 'none'; // Fechar o modal
          });
        });
        academicCard.appendChild(editButton);

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-button'; // Adiciona a classe delete-button
        deleteButton.addEventListener('click', () => {
          // Exibir modal de confirmação
          if (confirm('Tem certeza que deseja excluir esta informação acadêmica?')) {
            // Enviar requisição para excluir a informação acadêmica
            const deleteUrl = `http://localhost:4242/api/academic/delete/${id}`;
            fetch(deleteUrl, {
              method: 'DELETE',
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Informação acadêmica excluída:', data);
                // Atualizar a exibição das informações acadêmicas
                exibirInformacoesAcademicas();
              })
              .catch((error) => {
                console.error('Erro ao excluir informação acadêmica:', error);
              });
          }
        });
        academicCard.appendChild(deleteButton);

        academicContainer.appendChild(academicCard);
      });

      // Verificar a autenticação após exibir as informações acadêmicas
      checkAuthentication();
    })
    .catch((error) => {
      console.error('Erro ao obter informações acadêmicas:', error);
    });
}

// Obtém uma referência aos elementos relevantes
const addAcademicBtn = document.getElementById('addAcademicBtn');
const academicModal = document.getElementById('academicModal');
const saveAcademicBtn = document.getElementById('saveAcademicBtn');
const degreeInput = document.getElementById('degree');
const institutionInput = document.getElementById('institution');
const graduationYearInput = document.getElementById('graduationYear');
const closeAcademicBtn = document.getElementById('closeAcademicBtn');

// Define a função para abrir o modal de adição
function abrirModalAdicao() {
  // Exibe o modal de adição de educação
  academicModal.style.display = 'block';
}

// Define o evento de clique no botão de adicionar educação
addAcademicBtn.addEventListener('click', abrirModalAdicao);

// Define o evento de clique no botão "Fechar" do modal de adição
closeAcademicBtn.addEventListener('click', function() {
  // Oculta o modal de adição de educação
  academicModal.style.display = 'none';
});

// Define o evento de clique no botão de salvar do modal de adição
saveAcademicBtn.addEventListener('click', function() {
  // Obtém os valores dos campos de adição
  const degree = degreeInput.value;
  const institution = institutionInput.value;
  const graduationYear = graduationYearInput.value;

  if (degree === '' || institution === '' || graduationYear === '' || isNaN(graduationYear)) {
    alert('Por favor, insira valores válidos para o grau, instituição e ano de graduação.');
    return;
  }

  // Fecha o modal de adição de educação
  academicModal.style.display = 'none';

  // Cria um novo objeto com os dados da informação acadêmica
  const newAcademic = { degree, institution, graduationYear };

  // Envia uma requisição POST para adicionar a informação acadêmica
  const addUrl = 'http://localhost:4242/api/academic/create';
  fetch(addUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAcademic),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Informação acadêmica adicionada:', data);
      // Atualizar a exibição das informações acadêmicas
      exibirInformacoesAcademicas();
    })
    .catch((error) => {
      console.error('Erro ao adicionar informação acadêmica:', error);
    });

  // Limpa os campos de entrada do formulário
  degreeInput.value = '';
  institutionInput.value = '';
  graduationYearInput.value = '';
});

// Chama a função para exibir as informações acadêmicas ao carregar a página
exibirInformacoesAcademicas();

function exibirExperienciasProfissionais() {
  const url = 'http://localhost:4242/api/experience';

  // Obtém as experiências profissionais do servidor
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Limpa o container de experiências profissionais
      const professionalExperienceContainer = document.getElementById('professionalExperience');
      professionalExperienceContainer.innerHTML = '';

      // Exibe cada experiência profissional no container
      data.forEach((experience) => {
        const { id, company, position, startDate, endDate } = experience;

        const experienceCard = document.createElement('div');
        experienceCard.className = 'w3-container';

        const companyHeader = document.createElement('h5');
        companyHeader.className = 'w3-opacity';
        companyHeader.textContent = company;

        const positionHeader = document.createElement('h6');
        positionHeader.className = 'w3-text-teal';
        positionHeader.innerHTML = `<i class="fa fa-suitcase fa-fw w3-margin-right"></i>${position}`;

        const dateHeader = document.createElement('h6');
        dateHeader.className = 'w3-text-teal';
        dateHeader.innerHTML = `<i class="fa fa-calendar fa-fw w3-margin-right"></i>${startDate} - ${endDate}`;

        experienceCard.appendChild(companyHeader);
        experienceCard.appendChild(positionHeader);
        experienceCard.appendChild(dateHeader);

        // Botão de editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit-button'; // Adiciona a classe edit-button
        editButton.addEventListener('click', () => {
          // Preencher o modal com os dados da experiência profissional
          const companyInput = document.getElementById('editCompany');
          const positionInput = document.getElementById('editPosition');
          const startDateInput = document.getElementById('editStartDate');
          const endDateInput = document.getElementById('editEndDate');

          companyInput.value = company;
          positionInput.value = position;
          startDateInput.value = startDate;
          endDateInput.value = endDate;

          // Atualizar o evento de clique do botão de salvar do modal para enviar a requisição de atualização
          const saveEditExperienceBtn = document.getElementById('saveEditExperienceBtn');
          saveEditExperienceBtn.onclick = () => {
            // Obtém os novos valores dos campos de edição
            const newCompany = companyInput.value;
            const newPosition = positionInput.value;
            const newStartDate = startDateInput.value;
            const newEndDate = endDateInput.value;

            // Verifica se os valores são válidos
            if (
              !newCompany ||
              newCompany.trim() === '' ||
              !newPosition ||
              newPosition.trim() === '' ||
              !newStartDate ||
              newStartDate.trim() === '' ||
              !newEndDate ||
              newEndDate.trim() === ''
            ) {
              alert('Por favor, insira valores válidos para empresa, cargo, data de início e data de término.');
              return;
            }

            // Fecha o modal de edição
            const editExperienceModal = document.getElementById('editExperienceModal');
            editExperienceModal.style.display = 'none';

            // Atualiza a experiência profissional no servidor
            const updateUrl = `http://localhost:4242/api/experience/update/${id}`;
            fetch(updateUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                company: newCompany,
                position: newPosition,
                startDate: newStartDate,
                endDate: newEndDate,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Experiência profissional atualizada:', data);
                // Atualizar a exibição das experiências profissionais
                exibirExperienciasProfissionais();
              })
              .catch((error) => {
                console.error('Erro ao atualizar experiência profissional:', error);
              });
          };

          // Exibir o modal de edição
          const editExperienceModal = document.getElementById('editExperienceModal');
          editExperienceModal.style.display = 'block';

          // Botão de fechar do modal de edição
          const closeEditExperienceBtn = document.getElementById('closeEditExperienceBtn');
          closeEditExperienceBtn.addEventListener('click', () => {
          editExperienceModal.style.display = 'none'; // Fechar o modal
          });
        });
        experienceCard.appendChild(editButton);

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-button'; // Adiciona a classe delete-button
        deleteButton.addEventListener('click', () => {
          // Exibir modal de confirmação
          if (confirm('Tem certeza que deseja excluir esta experiência profissional?')) {
            // Enviar requisição para excluir a experiência profissional
            const deleteUrl = `http://localhost:4242/api/experience/delete/${id}`;
            fetch(deleteUrl, {
              method: 'DELETE',
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Experiência profissional excluída:', data);
                // Atualizar a exibição das experiências profissionais
                exibirExperienciasProfissionais();
              })
              .catch((error) => {
                console.error('Erro ao excluir experiência profissional:', error);
              });
          }
        });
        experienceCard.appendChild(deleteButton);

        professionalExperienceContainer.appendChild(experienceCard);
      });

      // Verificar a autenticação após exibir as experiências profissionais
      checkAuthentication();
    })
    .catch((error) => {
      console.error('Erro ao obter experiências profissionais:', error);
    });
}

// Obtém uma referência aos elementos relevantes
const addExperienceBtn = document.getElementById('addExperienceBtn');
const experienceModal = document.getElementById('experienceModal');
const saveExperienceBtn = document.getElementById('saveExperienceBtn');
const positionInput = document.getElementById('position');
const companyInput = document.getElementById('company');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const closeExperienceBtn = document.getElementById('closeExperienceBtn');

// Define a função para abrir o modal de adição de experiência profissional
function abrirExperienceModal() {
  // Exibe o modal de adição de experiência profissional
  experienceModal.style.display = 'block';
}

// Define o evento de clique no botão de adicionar experiência profissional
addExperienceBtn.addEventListener('click', abrirExperienceModal);

// Define o evento de clique no botão "Fechar" do modal de adição
closeExperienceBtn.addEventListener('click', function() {
  // Oculta o modal de adição de experiência profissional
  experienceModal.style.display = 'none';
});

// Define o evento de clique no botão de salvar do modal de adição
saveExperienceBtn.addEventListener('click', function() {
  // Obtém os valores dos campos de adição
  const position = positionInput.value;
  const company = companyInput.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  if (position === '' || company === '' || startDate === '' || endDate === '') {
    alert('Por favor, preencha todos os campos para adicionar a experiência profissional.');
    return;
  }

  // Fecha o modal de adição de experiência profissional
  experienceModal.style.display = 'none';

  // Cria um novo objeto com os dados da experiência profissional
  const newExperience = { position, company, startDate, endDate };

  // Envia uma requisição POST para adicionar a experiência profissional
  const addUrl = 'http://localhost:4242/api/experience/create';
  fetch(addUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newExperience),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Experiência profissional adicionada:', data);
      // Atualizar a exibição das experiências profissionais
      exibirExperienciasProfissionais();
    })
    .catch((error) => {
      console.error('Erro ao adicionar experiência profissional:', error);
    });

  // Limpa os campos de entrada do formulário
  positionInput.value = '';
  companyInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
});

exibirExperienciasProfissionais();
